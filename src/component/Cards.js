import React from "react";
import "./style.css";

export default function Cards(props) {
  return (
    <div>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  width={"100%"}
                  height={"300px"}
                />
                <h3 className="bname">Classic T-shirt</h3>
                <h3 className="ofer">
                  <del>50%OFF</del> <span>70%OFF</span>
                </h3>
                <button type="button" class="btn btn-warning">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://images.unsplash.com/photo-1621951753015-740c699ab970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0JTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  width={"100%"}
                  height={"300px"}
                />
                <h3 className="bname">Printed T-shirt</h3>
                <h3 className="ofer">
                  <del>20%OFF</del> <span>50%OFF</span>
                </h3>
                <button type="button" class="btn btn-warning">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  width={"100%"}
                  height={"300px"}
                />
                <h3 className="bname">Short Body T-shirt</h3>
                <h3 className="ofer">
                  <del>20%OFF</del> <span>50%OFF</span>
                </h3>
                <button type="button" class="btn btn-warning">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div><br/><br/>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://media.istockphoto.com/id/544358286/photo/pride-man-smiling.jpg?s=612x612&w=0&k=20&c=o7xWnlzKLdrPWdnml8s0kfaiXlme62N4iVWGC0TO0C8="
                  width={"100%"}
                  height={"300px"}
                />
                <h3 className="bname">Casual Shit</h3>
                <h3 className="ofer">
                  <del>50%OFF</del> <span>70%OFF</span>
                </h3>
                <button type="button" class="btn btn-warning">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://media.istockphoto.com/id/1438352772/photo/beautiful-shot-of-charming-male-confidently-leaning-on-a-white-iron-table-in-a-white.jpg?s=612x612&w=0&k=20&c=I7f_jYDZTrxGs7FcBKPJL7w39BvBqLcScm9njhw7JdU="
                  width={"100%"}
                  height={"300px"}
                />
                <h3 className="bname">Summer Short</h3>
                <h3 className="ofer">
                  <del>20%OFF</del> <span>50%OFF</span>
                </h3>
                <button type="button" class="btn btn-warning">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://media.istockphoto.com/id/1452545886/photo/blue-jeans-hanging-on-a-hanger.jpg?s=612x612&w=0&k=20&c=ZvO4ztAj5V9O1XnqNoG0sKLJUsBRhBL9M3O80ko6sXY="
                  width={"100%"}
                  height={"300px"}
                />
                <h3 className="bname">jeans</h3>
                <h3 className="ofer">
                  <del>20%OFF</del> <span>50%OFF</span>
                </h3>
                <button type="button" class="btn btn-warning">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
