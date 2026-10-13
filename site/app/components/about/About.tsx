import React from 'react';
import { StickyNote } from './StickyNote';
import { Polaroid } from './Polaroid';
import { Toolbelt } from './Toolbelt';

export function AboutMe() {
  return (
    <section className="mt-10 w-full">
      <div className="max-w-[520px]">
        <div className="flex items-center gap-2">
          <h1 className="font-caveat text-5xl leading-none">hii, i&rsquo;m gwen</h1>
         <svg 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 235.508 235.508" 
         fill="currentColor" 
         aria-hidden="true" 
         className={'size-12 text-ink'} >
         <path d="M235.508,90.772c0-6.734-1.715-13.431-4.973-19.35c-7.077-12.772-20.538-20.727-35.121-20.727 c-4.04,0-8.047,0.621-11.59,1.759c0.008-0.034,0.017-0.064,0.017-0.096c1.31-4.001,1.967-8.165,1.967-12.373 c0-14.559-7.942-28.01-20.738-35.113c-14.896-8.225-34.544-5.63-46.763,5.873C106.041-0.738,86.457-3.353,71.493,4.873 c-12.78,7.081-20.719,20.528-20.719,35.113c0,4.052,0.627,8.081,1.751,11.596c-0.024,0-0.046-0.016-0.076-0.016 c-18.173-5.933-38.391,2.3-47.49,18.773C1.719,76.233,0,82.921,0,89.672c0,10.299,3.901,20.035,10.854,27.415 C3.901,124.502,0,134.273,0,144.551c0,6.725,1.719,13.434,4.981,19.364c7.077,12.771,20.532,20.714,35.109,20.714 c4.082,0,8.127-0.612,11.587-1.763c-0.008,0.032-0.014,0.064-0.014,0.108c-1.32,3.987-1.987,8.135-1.987,12.358 c0,14.587,7.942,28.036,20.722,35.125c14.904,8.243,34.546,5.631,46.783-5.87c7.406,6.944,17.164,10.848,27.451,10.848 c6.74,0,13.425-1.711,19.352-4.978c12.788-7.073,20.715-20.521,20.715-35.125c0-4.047-0.613-8.051-1.748-11.577 c0.028,0,0.061,0.016,0.093,0.016c17.953,5.835,38.367-2.26,47.492-18.759c3.241-5.902,4.973-12.595,4.973-19.352 c0-10.295-3.899-20.053-10.852-27.435C231.609,110.831,235.508,101.071,235.508,90.772z M226.608,145.669 c0,5.262-1.338,10.472-3.871,15.044c-7.097,12.816-21.528,19.564-37.333,14.487c-2.408-0.537-5.077-1.623-8.144-3.326 c-1.703-0.95-3.871-0.661-5.273,0.721c-1.41,1.387-1.747,3.511-0.813,5.258c1.519,2.914,2.492,5.351,3.09,7.907 c1.021,3.117,1.543,6.348,1.543,9.59c0,11.337-6.18,21.809-16.122,27.314c-12.784,7.001-29.747,3.787-39.076-7.406 c-0.846-1.025-2.101-1.61-3.427-1.61c-1.328,0-2.581,0.597-3.428,1.61c-9.296,11.233-26.299,14.459-39.041,7.406 c-9.948-5.49-16.134-15.962-16.134-27.314c0-3.267,0.525-6.48,1.663-10.023c0.529-2.376,1.609-5.033,3.316-8.123 c0.945-1.734,0.651-3.875-0.726-5.277c-1.38-1.423-3.499-1.764-5.266-0.817c-2.892,1.522-5.326,2.497-7.891,3.09 c-13.834,4.628-29.799-1.771-36.896-14.56c-2.569-4.685-3.879-9.754-3.879-15.056c0-9.301,4.124-18.065,11.289-24.036 c1.014-0.842,1.609-2.124,1.601-3.438c0-1.333-0.587-2.575-1.609-3.438c-7.173-5.933-11.289-14.688-11.289-23.99 c0-5.244,1.344-10.458,3.879-15.042C18.276,64.696,28.741,58.5,40.083,58.5c3.228,0,6.464,0.517,10.024,1.663 c2.351,0.511,5.009,1.595,8.141,3.312c1.721,0.966,3.871,0.651,5.268-0.727c1.398-1.384,1.735-3.513,0.815-5.251 c-1.529-2.914-2.503-5.364-3.094-7.909c-1.02-3.115-1.545-6.352-1.545-9.602c0-11.311,6.179-21.784,16.12-27.309 c12.764-7.053,29.741-3.801,39.086,7.418c0.848,1.012,2.103,1.595,3.425,1.595h0.008c1.326,0,2.581-0.597,3.418-1.609 c9.313-11.205,26.333-14.433,39.028-7.404c9.959,5.502,16.146,15.974,16.146,27.309c0,3.266-0.521,6.486-1.655,10.013 c-0.529,2.376-1.619,5.063-3.33,8.165c-0.941,1.723-0.642,3.867,0.737,5.282c1.374,1.403,3.511,1.767,5.258,0.801 c2.894-1.515,5.338-2.488,7.883-3.094c14.153-4.654,29.839,1.798,36.912,14.569c2.541,4.601,3.879,9.798,3.879,15.042 c0,9.303-4.124,18.062-11.293,24.038c-1.01,0.832-1.606,2.112-1.591,3.429c0,1.334,0.581,2.593,1.607,3.435 C222.493,127.608,226.608,136.356,226.608,145.669z"/> 
         
         <path d="M146.227,100.953c0-15.715-12.747-28.473-28.473-28.473c-15.723,0-28.457,12.758-28.457,28.473 c0,9.979,5.148,18.721,12.914,23.818l-14.988,38.087h61.059l-14.996-38.087C141.078,119.673,146.227,110.923,146.227,100.953z" /> 
         </svg>

        </div>
      
        <p className="mt-3 text-[17px] leading-relaxed text-text-muted">i build things, break things, and occasionally win a hackathon or two. welcome to my little corner of the internet, take a look around!</p>
        <a href="mailto:hello@gwen.dev" className="mt-5 inline-block font-caveat text-2xl font-bold italic text-pink-deep" style={{ transform: 'rotate(-1.5deg)' }}>say hi →</a>
      </div>

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
        {/* Left Column: Sticky Notes */}
        <div className="flex max-w-[360px] flex-col gap-8 pt-1">
          <StickyNote rotation="-1.5deg">
            <h3 className="font-caveat text-xl font-normal underline decoration-pink-deep/70 decoration-2 underline-offset-4">
              currently:
            </h3>
            <p className="mt-2 font-caveat text-[19px] italic leading-snug">
              building a chrome extension, learning Rust, and drinking way too much chai ☕
            </p>
          </StickyNote>

          <StickyNote rotation="1deg" variant="white">
            <p className="flex items-center gap-2 font-sans text-[13px] text-muted">
              currently reading 📖
            </p>
            <p className="mt-1 font-caveat text-[19px] italic leading-snug text-ink">
              &ldquo;The Design of Everyday Things&rdquo;
            </p>
          </StickyNote>
        </div>

        {/* Right Column: About Me, Polaroids, Toolbelt */}
        <div className="flex min-w-0 flex-col">
          <h2 className="font-caveat text-4xl font-normal">
            a lil about me ♡
          </h2>

          <div className="mt-6 grid max-w-[600px] grid-cols-3 gap-4 sm:gap-5">
            <Polaroid
              src="/ice_cream.jpg"
              caption="ice cream breaks 🍦"
              rotation="-3deg"
            />
            <Polaroid
              src="/bike.jpg"
              caption="side questing 🚲"
              rotation="2deg"
            />
            <Polaroid
              src="/side-quest.jpg"
              caption="touching grass 🌿"
              rotation="-1deg"
            />
          </div>

          <Toolbelt />
        </div>
      </div>
    </section>
  );
}
