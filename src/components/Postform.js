import React, { Component } from 'react'

class PostForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then( res => res.json() )
      .then( data => console.log(data))
      .catch( { errors: post.errors })
  }


  render() {
    return (
      <div>
        <h1>Add a Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
            <br />
          </div>
          <div>
            <label>Body: </label><br />
            <textarea name="body" onChange={this.onChange} value={this.state.body}  />
          </div>
          <br />
          <button type="submit">Submit</button>
          <hr />
        </form>
      </div>
    )
  }
}

export default PostForm