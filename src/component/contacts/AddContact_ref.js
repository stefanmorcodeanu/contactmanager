// import React, { Component } from "react";

// // Uncontroled components

// class AddContact extends Component {
//   constructor(props) {
//     super(props);

//     this.nameInput = React.createRef();
//     this.emailInput = React.createRef();
//     this.phoneInput = React.createRef();
//   }

//   onSubmit = e => {
//     e.preventDefault();

//     const newContact = {
//       name: this.nameInput.current.value,
//       email: this.emailInput.current.value,
//       phone: this.phoneInput.current.value
//     };

//     console.log(newContact);
//   };

//   static defaultProps = {
//     name: "John Skid",
//     email: "johnskid@mail.com",
//     phone: "888-079-444"
//   };

//   render() {
//     const { name, email, phone } = this.props;

//     return (
//       <div className="card mb-3">
//         <div className="card-header">Add contact</div>
//         <div className="card-body">
//           <form onSubmit={this.onSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 className="form-control form-control-lg"
//                 type="text"
//                 placeholder="Enter Name.."
//                 name="name"
//                 defaultValue={name}
//                 ref={this.nameInput}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 className="form-control form-control-lg"
//                 type="email"
//                 placeholder="Enter Email.."
//                 name="email"
//                 defaultValue={email}
//                 ref={this.emailInput}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input
//                 className="form-control form-control-lg"
//                 type="text"
//                 placeholder="Enter Phone.."
//                 name="phone"
//                 defaultValue={phone}
//                 ref={this.phoneInput}
//               />
//             </div>

//             <input
//               type="submit"
//               value="Add contact"
//               className="btn btn-block btn-light"
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddContact;
