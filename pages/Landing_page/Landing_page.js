
import Industry_skillset from 'components/Landing_page/Industry_skillset';
import Search_banner from 'components/Landing_page/Search_banner';
import Head from 'next/head';
import React from 'react';
import Navbar from '../../container/navbar/navbar';



const Landing_page = () => {
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                />
           
                <title>Landing_page</title>
            </Head>
            <Navbar />
            <Search_banner></Search_banner>
            <Industry_skillset></Industry_skillset>
            
            
                    
            
    
    
		
	
        </div>
    );
};

export default Landing_page;