import React, { Component } from 'react';
import Title from '../title/Title';
import './About.css';
import TaxImg from '../../assets/img/tax.png';

class About extends Component {    
    render() {
        const title = 'The Federal Income Tax';

        return (
            <article className="About">
                <section>
                    <Title headerTitle={title} imgSrc={TaxImg} altMessage={title}/>
                    <p>
                        The federal personal income tax that is administered by the Internal 
                        Revenue Service (IRS) is the largest source of revenue for the U.S. 
                        federal government. Nearly all working Americans are required to file 
                        a tax return with the IRS each year and most pay taxes throughout the 
                        year in the form of payroll taxes that are withheld from their paychecks. 
                    </p>
                    <p>
                        Income taxes in the U.S. are calculated based on tax rates that range from 
                        10% to 39.6%. (President Trump and Republicans in Congress have proposed 
                        lowering the highest tax rate to 37%, along with other changes in a major 
                        plan for tax reform.) Taxpayers can lower their tax burden and the amount 
                        of taxes they owe by claiming exemptions, deductions and credits. Below, 
                        we’ll take a closer look at the most important IRS tax rules to help you 
                        understand how your taxes are calculated.
                    </p>
                </section>
            </article>
        );
    }
}

export default About;

// Icon made by Freepik from www.flaticon.com 