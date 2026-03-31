import Text "mo:core/Text";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Time "mo:core/Time";

actor {
  type ContactInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
    sender : Principal;
  };

  module ContactInquiry {
    public func compare(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Int.compare(inquiry2.timestamp, inquiry1.timestamp);
    };
  };

  let inquiries = Map.empty<Principal, ContactInquiry>();

  // Submit a contact inquiry (no authentication required)
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("Name, email, and message are required fields");
    };
    let inquiry : ContactInquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
      sender = caller;
    };
    inquiries.add(caller, inquiry);
  };

  // Admin function to get all inquiries (sorted by most recent first)
  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    inquiries.values().toArray().sort();
  };
};
