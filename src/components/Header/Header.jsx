
const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center w-10/12 mx-auto mt-5 mb-5">
            <h1 className='text-3xl font-bold'>CAP-10 Resturent</h1>
            <ul className="flex gap-x-5 font-bold">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <input className="p-2 rounded" type="text" name="" id="" placeholder="search" />
        </div>
        <div className="">
            <div className="relative">
            <img className="" src="https://i.ibb.co/j3ynT4H/dan-gold-5-O1dden-SM4g-unsplash.jpg" alt="" />
            <div className="absolute top-1/3 left-1/4 text-white md:space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold md:w-3/5">Discover an exceptional cooking class tailored for you!</h2>
            <p className="md:w-3/5 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam est nostrum quaerat mollitia, dolores maxime impedit nobis obcaecati nihil.</p>
            <div className="">
                <button className="btn  bg-green-500 p-2 rounded-full mr-8 text-black">Explore Now</button>
                <button className="btn border-2 p-2 rounded-full">Our Feedback</button>
            </div>
            </div>
            </div>
        </div>
        </div>
        
    );
};

export default Header;