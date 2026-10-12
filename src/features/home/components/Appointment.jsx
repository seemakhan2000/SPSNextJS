export default function Appointment() {
  return (
    <>
      <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 bg-light z-2 bg-[url(/assets/images/background/bg5.webp)]">
        <div className="container">
          <div className="row items-end max-lg:flex-col-reverse">

            <div className="lg:w-1/2 w-full text-center">
              <img
                loading="lazy"
                src="/assets/images/spsimg/s4.webp"
                alt="img03"
                width="600"
                height="600"
                className="max-lg:mx-auto"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative lg:pl-12.5 xl:ml-15 lg:-mb-10 mb-7.5">

                <div className="[writing-mode:tb] -rotate-180 rounded-tr-2xxl rounded-br-2xxl text-white text-center px-7.5 py-2.5 text-lg uppercase font-semibold bg-secondary w-12.5 flex items-center justify-center absolute left-0 top-11.25 max-lg:hidden">
                  Appointment Now
                </div>

                <div
                  className="form-primary-panel sm:rounded-3xl rounded-xxl xl:py-12.5 xl:px-10 py-8.75 px-7.5 bg-primary bg-cover relative"
                  style={{
                    "--form-panel-bg":
                      "url(/assets/images/background/bg02.webp)",
                  }}
                >
                  <div className="sm:mb-7.5 mb-5">
                    <h2 className="sm:text-2xl text-lg text-white mb-0 leading-snug">
                      We are an IT Solutions Provider
                      <br />
                      focused on Solving Business Problems leveraging{" "}
                      <span className="text-secondary font-bold">
                        AI, Cloud, Automation & Cybersecurity
                      </span>
                    </h2>
                  </div>

                  <form
                    action="assets/script/contact_smtp.php"
                    className="dzForm"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      value="Appointment"
                    />

                    <input
                      type="hidden"
                      className="form-control"
                      name="reCaptchaEnable"
                      value="0"
                    />

                    <div className="dzFormMsg"></div>

                    <div className="row">

                      <div className="sm:w-1/2 w-full mb-7.5">
                        <div className="relative">
                          <input
                            name="dzName"
                            type="text"
                            className="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full"
                            id="inputYourName"
                            placeholder="Your Name"
                          />

                          <label
                            className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                            htmlFor="inputYourName"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="sm:w-1/2 w-full mb-7.5">
                        <div className="relative">
                          <input
                            name="dzEmail"
                            type="email"
                            className="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full"
                            id="inputYourEmail"
                            placeholder="Your Email"
                          />

                          <label
                            className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                            htmlFor="inputYourEmail"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="sm:w-1/2 w-full mb-7.5">
                        <div className="relative">
                          <input
                            name="dzPhoneNumber"
                            type="text"
                            className="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full dz-number"
                            id="inputPhoneNumber"
                            placeholder="Phone Number"
                          />

                          <label
                            className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                            htmlFor="inputPhoneNumber"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>

                      <div className="sm:w-1/2 w-full mb-7.5">
                        <div className="relative custom-select">
                          <div data-label="Services">
                            <select
                              name="dzOther[Services]"
                              className="dynamic-select"
                              id="sortingSelect"
                            >
                              <option value="AI Solutions">
                                AI Solutions
                              </option>

                              <option value="Cloud Services">
                                Cloud Services
                              </option>

                              <option value="Cybersecurity">
                                Cybersecurity
                              </option>

                              <option value="Software Development">
                                Software Development
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="w-full mb-7.5">
                        <div className="relative">
                          <textarea
                            name="dzMessage"
                            className="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 w-full peer"
                            id="inputMessage"
                            rows="6"
                            placeholder="Select Service"
                          ></textarea>

                          <label
                            className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                            htmlFor="inputMessage"
                          >
                            Message
                          </label>
                        </div>
                      </div>

                      <div className="w-full">
                        <button
                          type="submit"
                          name="submit"
                          value="submit"
                          className="btn btn-lg btn-icon btn-white group"
                        >
                          Appointment

                          <span className="size-11 min-w-11 bg-secondary text-white rounded-2lg inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 duration-500 group-hover:bg-white group-hover:text-secondary">
                            <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
                          </span>
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}