import React from "react";

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // similar to useState
      count: 0,
      count1: 1, //new state variable
      userInfo: {
        name: "",
        avatar_url: null,
      },
    };
    console.log("Child constructor");
  }
  async componentDidMount() {
    //Here we can make API calls
    console.log("component did mount before call");
    const data = await fetch("https://api.github.com/users/aaquib-anzar");
    const json = await data.json();
    this.setState({ userInfo: json });

    this.timer = setInterval(()=>{console.log("Is Running")},1000)
    console.log(json);
    console.log("component did mount after call");
  }
  componentDidUpdate() {
    console.log("component did update -Child");
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component will unmount")
  }
  render() {
    console.log(" Child render");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name:{this.state.userInfo.name}</h3>
        <h3>Count:{this.state.count}</h3>
        <h3>Count1:{this.state.count1}</h3>
        <button
          onClick={() => {
            this.setState({ count: 1, count1: 2 });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}
export default ProfileComponent;
// class based component
