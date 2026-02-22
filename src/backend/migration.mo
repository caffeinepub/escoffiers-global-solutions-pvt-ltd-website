import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";

module {
  public type UserProfile = {
    name : Text;
    email : Text;
  };

  public type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  public type OldActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    nextInquiryId : Nat;
    inquiries : Map.Map<Nat, ContactInquiry>;
  };

  public type NewActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    nextInquiryId : Nat;
    inquiries : Map.Map<Nat, ContactInquiry>;
  };

  public func run(old : OldActor) : NewActor {
    {
      userProfiles = old.userProfiles;
      nextInquiryId = old.nextInquiryId;
      inquiries = old.inquiries;
    };
  };
};
