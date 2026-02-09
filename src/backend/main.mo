import Map "mo:core/Map";
import List "mo:core/List";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

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
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact Inquiry System
  public type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactInquiry {
    public func compare(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Nat.compare(inquiry1.id, inquiry2.id);
    };
  };

  var nextInquiryId = 0;
  let inquiries = Map.empty<Nat, ContactInquiry>();

  // Public contact form - accessible to everyone including guests
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async Nat {
    // No authorization check -
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
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    switch (inquiries.get(inquiryId)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  // Admin-only: View all inquiries
  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    inquiries.values().toArray().sort();
  };
};
