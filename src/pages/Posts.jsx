export default function PostsPage() {
  return (
    <>

      <div className="min-h-screen md:container md:mx-auto bg-base-100 flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-2">
          <div className="card w-full h-[300px] md:h-auto md:w-4/5 glass">
            <div className="flex flex-row py-4">
              <div className="avatar">
                <div className="w-16 rounded-full mx-5">
                  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
              </div>
              <p className="flex-end text-sm capitalize pr-2 py-4">By User1 10.10.23 12:22</p>
            </div>

            <figure className="max-h-[200px] overflow-hidden">
              <img className="object-cover w-full h-full" src="https://source.unsplash.com/random" alt="!" />
            </figure>

            <div className="card-body prose">
              <h2 className="card-title">How to make website?</h2>
              <p className="text-start">Today I learned that making a website is like skiing with rollerskates..?</p>
              <div className="card-actions justify-end">
                <a className="link link-hover link-accent">Read more..</a>
              </div>
            </div>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        {/* You can duplicate this div for each additional card */}
        <div className="w-full md:w-1/3 p-2">
          <div className="card w-full h-[300px] md:h-auto md:w-4/5 glass">
            <div className="flex flex-row py-4">
              <div className="avatar">
                <div className="w-16 rounded-full mx-5">
                  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
              </div>
              <p className="flex-end text-sm capitalize pr-2 py-4">By User1 10.10.23 12:22</p>
            </div>

            <figure className="max-h-[200px] overflow-hidden">
              <img className="object-cover w-full h-full" src="https://source.unsplash.com/random" alt="!" />
            </figure>

            <div className="card-body prose">
              <h2 className="card-title">How to make website?</h2>
              <p className="text-start">Today I learned that making a website is like skiing with rollerskates..?</p>
              <div className="card-actions justify-end">
                <a className="link link-hover link-accent">Read more..</a>
              </div>
            </div>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-2">
          <div className="card w-full h-[300px] md:h-auto md:w-4/5 glass">
            <div className="flex flex-row py-4">
              <div className="avatar">
                <div className="w-16 rounded-full mx-5">
                  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
              </div>
              <p className="flex-end text-sm capitalize pr-2 py-4">By User1 10.10.23 12:22</p>
            </div>

            <figure className="max-h-[200px] overflow-hidden">
              <img className="object-cover w-full h-full" src="https://source.unsplash.com/random" alt="!" />
            </figure>

            <div className="card-body prose">
              <h2 className="card-title">How to make website?</h2>
              <p className="text-start">Today I learned that making a website is like skiing with rollerskates..?</p>
              <div className="card-actions justify-end">
                <a className="link link-hover link-accent">Read more..</a>
              </div>
            </div>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
