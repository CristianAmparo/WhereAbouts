import React, { Component } from 'react';

class UserList extends Component {
  state = {
    users: [],
  };
  
  componentDidMount() {
    fetch('http://localhost/WhereAbouts/api/sample.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          users: data, // Set the fetched data in the state
        });
      })
      .catch((error) => {
        console.error("Error Reading data " + error);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>User List</h1>
        <main className="bg-[#F4F1E8] min-h-screen w-full pt-28 p-10 " >

                <div className="mb-5 relative " >
                    <img className="absolute top-1.5 left-2 w-5" src="public/images/search.png" alt="" />
                    <input className="w-80 pl-10" type="text" placeholder="Search your instructor"/>
                </div>
                <div>Department of Information Technology</div>
                <div className="hero items-center justify-center mr-96" >
               

                
                    {users.map((user) => (
                        user.department === "Department of Information Technology" &&
                
                            <div className="flex items-center h-32 bg-white w-96 space-x-3 p-5 rounded-xl shadow-md "key={user.id}>
                                <div>
                                    <img className="w-14" src="public/images/profile.png"/>
                                </div>
                                <div className="space-y-1">
                                    <div>
                                        <h3 className="font-bold text-xl">{user.fName} {user.lName}</h3>
                                    </div>
                                    <div className="flex space-x-2">
                                        <h4 className="bg-green-700 px-2 rounded-2xl border-2 border-black">In</h4>
                                        <h4 className="bg-yellow-500 px-2 rounded-2xl border-2 border-black">Available</h4>
                                        <h4 className="bg-gray-300 px-2 rounded-2xl border-2 border-black">DIT Faculty</h4>
                                    </div>
                                </div>
                            </div> 
                ))}

              
            </div>

            <div>Department of Engineering</div>
                <div className="hero items-center justify-center mr-96" >
               

                
                    {users.map((user) => (
                        user.department === "Department of Engineering" &&
                
                            <div className="flex items-center h-32 bg-white w-96 space-x-3 p-5 rounded-xl shadow-md "key={user.id}>
                                <div>
                                    <img className="w-14" src="public/images/profile.png"/>
                                </div>
                                <div className="space-y-1">
                                    <div>
                                        <h3 className="font-bold text-xl">{user.fName} {user.lName}</h3>
                                    </div>
                                    <div className="flex space-x-2">
                                        <h4 className="bg-green-700 px-2 rounded-2xl border-2 border-black">In</h4>
                                        <h4 className="bg-yellow-500 px-2 rounded-2xl border-2 border-black">Available</h4>
                                        <h4 className="bg-gray-300 px-2 rounded-2xl border-2 border-black">DIT Faculty</h4>
                                    </div>
                                </div>
                            </div> 
                ))}

              
            </div>

             <div>Department of Architecture</div>
                <div className="hero items-center justify-center mr-96" >
               

                
                    {users.map((user) => (
                        user.department === "Department of Architecture" &&
                
                            <div className="flex items-center h-32 bg-white w-96 space-x-3 p-5 rounded-xl shadow-md "key={user.id}>
                                <div>
                                    <img className="w-14" src="public/images/profile.png"/>
                                </div>
                                <div className="space-y-1">
                                    <div>
                                        <h3 className="font-bold text-xl">{user.fName} {user.lName}</h3>
                                    </div>
                                    <div className="flex space-x-2">
                                        <h4 className="bg-green-700 px-2 rounded-2xl border-2 border-black">In</h4>
                                        <h4 className="bg-yellow-500 px-2 rounded-2xl border-2 border-black">Available</h4>
                                        <h4 className="bg-gray-300 px-2 rounded-2xl border-2 border-black">DIT Faculty</h4>
                                    </div>
                                </div>
                            </div> 
                ))}

              
            </div>
        </main>
      </div>
    );
  }
}

export default UserList;