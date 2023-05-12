import "./research.css";
import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import Poster from '../../images/UROP-Research-Poster.svg';

const Main = () => {
    return(
        <div class="research-container">
            <div class="research-nav">
                <Link to="/" class="back-link">
                    <BsArrowLeftCircle class="left-circle"/>
                </Link>
                grace-manning.com
            </div>
            <h1 id="research-h1">Quantitative Analysis of Fast Fashion and Slow Fashion Website Design Elements Using a Web Crawler</h1>
            <h2 id="research-h2">Undergraduate Research</h2>
            <h3 id="research-h3">September 2022 - June 2023</h3>
            <div class="research-section">
                <h4>Quick Links</h4>
                <br/>
                <div class="research-links">
                    <a class="research-link" href="https://github.com/gracebmanning/gm-research-crawler-v2" target="_blank" rel="noreferrer">GitHub Repository</a>
                    <a class="research-link" href="https://urop.uci.edu/" target="_blank" rel="noreferrer">UROP (Undergraduate Research Opportunities Program)</a>
                    <p class="research-link" href="" target="_blank" rel="noreferrer">Completed Thesis Paper (TBD)</p>
                </div>
            </div>
            <div class="research-section">
                <h4>Abstract</h4>
                <br/>
                <p>
                    Fast fashion and slow fashion retail websites are often visually distinct, but little research has been done to analyze statistical differences in their structure and content. 
                    As the conversation about the social and environmental impacts of fast fashion continues to grow, the need for quantitative comparisons between fast & slow fashion also rises. 
                    This research aims to collect quantitative data from the retail websites of five fast fashion brands and five slow fashion brands in an effort to identify and analyze their differences. 
                    I configured a web crawler for data collection, which is an automated program that can visit a website, collect its content, and return this information for analysis. 
                    The collected content includes hypertext markup language (HTML), which is the basic programming language for creating web pages. 
                    The crawler collected data on the websites of five fast fashion brands: Forever21, Shein, Fashion Nova, H&M, and Pretty Little Thing, and five slow fashion brands: Big Bud Press, CHNGE, Fashion Brand Company, Tunnel Vision, and iGirl. 
                    This research presents the most significant results of my data collection and the resulting statistical analysis of the fast and slow fashion brand comparison. 
                    Overall, fast fashion brands took longer to crawl (~20 hours avg.) and had a larger number of pages (10,000+). 
                    It can be hard to understand the negative impacts that fast fashion has on our lives, but these numbers help us quantify the overproduction and waste that comes from following trend cycles and buying into fast fashion.
                </p>
            </div>
            <div class="research-section">
                <h4>Poster (Presented at UROP Symposium)</h4>
                <br/>
                <img class="research-poster" src={Poster} alt="research poster with green, brown, and beige color scheme. Interconnected blobs of text that highlight key points from research project." />
            </div>
        </div>
    );
};

export default Main