import React, { Component } from 'react';

class Sample2 extends Component {
  state = {
    users: [],
  };
  
  componentDidMount() {
 fetch('http://localhost/WhereAbouts/api/sample2.php')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data)
    this.setState({
      users: data,
    });
  })
  .catch((error) => {
    console.error("Error Reading data:", error);
  });
  }

  render() {
    const { users } = this.state;

    return (
        <>
        <section className="fixed right-0 top-0  z-0 h-screen pt-28 w-96 bg-[#F8EFD1] shadow-2xl">
        <div className="flex flex-col items-center">
          <img className='w-32' src="public/images/profile.png" alt="" />
          <h3 className="text-2xl font-bold">{users.fName} {users.lName}</h3>
          <h3>Department of Information Technology</h3>
          <div className="mt-5 justify-center bg-black w-3/4 h-0.5"></div>
        </div>
      </section>
        </>
    );
  }
}

export default Sample2;