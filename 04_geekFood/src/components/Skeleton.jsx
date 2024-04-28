import React from "react";

function Skeleton() {
  return (
    <>
      <section className="py-8" style={{ backgroundColor: "#8080802b" }}>
        <div className="skeleton px-16 py-8">
          <div className="skeleton-img">
            <img
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
              alt=""
              width="700"
            />
          </div>
          <div className="skeleton-text">
            <h1 className="text-4xl mb-8" style={{ maxWidth: "80%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h1>
            <p className="text-gray-400 mb-8" style={{ maxWidth: "80%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skeleton;
