import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Migration "migration";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
    email : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    checkUserPermission(caller);
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    checkUserOrAdminAccess(caller, user);
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    checkUserPermission(caller);
    userProfiles.add(caller, profile);
  };

  // Contact Inquiry System
  public type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  func compareInquiries(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
    Nat.compare(inquiry1.id, inquiry2.id);
  };

  var nextInquiryId = 0;
  let inquiries = Map.empty<Nat, ContactInquiry>();

  // Public contact form - accessible to everyone including guests
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async Nat {
    let inquiry : ContactInquiry = {
      id = nextInquiryId;
      name;
      email;
      message;
    };
    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
    inquiry.id;
  };

  // Admin-only: View single inquiry
  public query ({ caller }) func getInquiry(inquiryId : Nat) : async ContactInquiry {
    checkAdminPermission(caller);
    getInquiryById(inquiryId);
  };

  // Admin-only: View all inquiries
  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    checkAdminPermission(caller);
    inquiries.values().toArray().sort(compareInquiries);
  };

  // Helper Functions
  func checkUserPermission(caller : Principal) {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access/save profiles");
    };
  };

  func checkUserOrAdminAccess(caller : Principal, user : Principal) {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
  };

  func checkAdminPermission(caller : Principal) {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
  };

  func getInquiryById(inquiryId : Nat) : ContactInquiry {
    switch (inquiries.get(inquiryId)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};

