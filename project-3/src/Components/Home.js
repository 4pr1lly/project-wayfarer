import React from 'react'
import './home.css';

function Home() {
    return (
    <div>
    <div className="img-home">
        <img src="https://www.pxwall.com/wp-content/uploads/2018/08/Wallpaper%20Niagara%20Falls,%20Waterfall,%207K,%20Travel%207369715415.jpg" alt="waterfall"/>
    </div>
        <div className="topic-container">
            <div className="jumbotron">
                <h2 className="header">Wayfarer</h2>
                <main className="topics">
                  <div>
                    <h3 className="topic">San Francisco</h3>
                    <p className="topic-col">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                  </div>
                  <div>
                    <h3 className="topic">New York</h3>
                    <p className="topic-col">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                  </div>
                  <div>
                    <h3 className="topic">Sydney</h3>
                    <p className="topic-col">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.                    </p>
                  </div>
                </main>
            </div>
      </div>
    </div>
    )
}

export default Home;