import BreadCrump from '@/components/elements/BreadCrump';


const About = () => {
    return (
        <>
        <div className='container'>
        <BreadCrump
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
          <div className='py-8'>About Component Content</div>
        </div>
    
        </>

 
      
    );
};




  About.propTypes = {

};


export default About;
