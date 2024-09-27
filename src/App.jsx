import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import DialogModel from './components/DialogModel/DialogModel';
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './components/Services/Services';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AppStore from './components/AppStore/AppStore';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
function App(isTrue) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        AOS.init({
            // Options can be set here, like:
            offset: 120, // offset (in px) from the original trigger point
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: false // whether animation should happen only once or every time you scroll up/down
        });
    }, []);
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <Navbar />
            <Hero />
            <Services />
            <ItemDetails />
            <AppStore />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;
