import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 40 20">
        <path fill={fill} d="M23.7316,4.3791h6.1143V4.656h-.749a1.3535,1.3535,0,0,0-.8008.2094.6855.6855,0,0,0-.291.5913,2.1869,2.1869,0,0,0,.2168.8531l2.8506,6.2558L33.468,7.17a2.6554,2.6554,0,0,0,.2841-1.07,1.351,1.351,0,0,0-.4-1.0254A1.6822,1.6822,0,0,0,32.24,4.656V4.3791h4.2129V4.656a2.645,2.645,0,0,0-1.07.3481,2.9732,2.9732,0,0,0-.86.8081,7.85,7.85,0,0,0-.7862,1.4028l-3.4717,7.82-.2617.0146L25.9543,6.22q-.7177-1.5638-1.8555-1.5639h-.3672Z"/>
        <path fill={fill} d="M0,0V20H20V0ZM14.754,12.5914a2.896,2.896,0,0,1-.6584.9542,3.4791,3.4791,0,0,1-1.3658.8529,5.5874,5.5874,0,0,1-1.852.2845,6.1307,6.1307,0,0,1-1.3658-.1461,9.6959,9.6959,0,0,1-1.56-.5352,9.3788,9.3788,0,0,0-.913-.3252,2.2382,2.2382,0,0,0-.5912-.086,1.4512,1.4512,0,0,0-.9018.28,1.34,1.34,0,0,0-.49.797H4.7938V9.8337h.2621a4.3881,4.3881,0,0,0,1.04,2.3348A6.16,6.16,0,0,0,7.4542,13.31a7.4881,7.4881,0,0,0,1.7324.8193,5.61,5.61,0,0,0,1.7211.292,3.56,3.56,0,0,0,1.3282-.24,2.1925,2.1925,0,0,0,.9391-.666,1.5162,1.5162,0,0,0,.3368-.9651,1.4177,1.4177,0,0,0-.4564-1.0253,2.2858,2.2858,0,0,0-.5425-.3741,6.3994,6.3994,0,0,0-.8606-.3518q-.5277-.18-1.448-.4265l-.7484-.2021q-1.7511-.4715-2.4245-.7333a6.1511,6.1511,0,0,1-1.1861-.5539A2.8029,2.8029,0,0,1,5.1006,8.18a2.1012,2.1012,0,0,1-.464-1.3171,2.5441,2.5441,0,0,1,.5164-1.56A3.3846,3.3846,0,0,1,6.5973,4.2213a5.2714,5.2714,0,0,1,2.0579-.3891,7.6825,7.6825,0,0,1,3.54.95,2.5453,2.5453,0,0,0,.8754.3217q.5837,0,.8382-.86H14.17V7.8282h-.2619a6.889,6.889,0,0,0-1.07-2.0205,4.24,4.24,0,0,0-1.0889-.8941,5.9471,5.9471,0,0,0-1.4666-.6061A6.233,6.233,0,0,0,8.64,4.0866a3.3107,3.3107,0,0,0-1.1076.1722,2.1678,2.1678,0,0,0-.8232.5088,1.92,1.92,0,0,0-.3815.5388,1.3385,1.3385,0,0,0-.1423.5762,1.2043,1.2043,0,0,0,.4042.9055,2.0219,2.0219,0,0,0,.5349.3592,5.8485,5.8485,0,0,0,.8981.3367q.55.1648,1.5378.404a3.1971,3.1971,0,0,0,.3666.0974l.3667.09.5838.1495a16.36,16.36,0,0,1,2.1626.6735,3.6552,3.6552,0,0,1,1.16.7708,2.4806,2.4806,0,0,1,.58.8232A2.5157,2.5157,0,0,1,14.986,11.51,2.7342,2.7342,0,0,1,14.754,12.5914Z"/>
    </svg>
  );
}