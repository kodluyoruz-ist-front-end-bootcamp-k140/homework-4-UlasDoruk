import React from 'react'

function Cards() {
  return (
    <div className='container'>
      <div class="card-group">
        <div class="card">
          <img
            class="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsfondo.info%2Fi%2Foriginal%2Ff%2Fa%2F9%2F72628.jpg&f=1&nofb=1"
            alt="Card image cap"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards