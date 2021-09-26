const Home = () => {

    const handleClick = () => {
        console.log("hello")
    }
    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>click me</button>
        </div>
      );
}
 
export default Home;