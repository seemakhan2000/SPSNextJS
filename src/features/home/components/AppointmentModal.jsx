export default function AppointmentModal() {
  return (
    <>
      <div
        id="appointmentModal"
        className="hidden-modal fixed inset-0 w-full h-full z-[999999] flex items-center justify-center p-5"
        data-close-appointment=""
      >
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm -z-10"></div>

        <div
          className="modal-card bg-white w-full max-w-[700px] rounded-xl shadow-2xl flex flex-col border border-gray-200"
          data-appointment-card=""
        >
          <div className="px-6 py-3 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
            <h3 className="text-lg font-bold text-secondary">
              Request a Quote
            </h3>

            <button
              type="button"
              data-close-appointment=""
              className="text-gray-400 hover:text-primary transition-all text-xl p-2 leading-none"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="p-5 bg-white">
            <form id="appointmentForm" className="space-y-4">

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
                  Requirements
                </label>

                <textarea
                  placeholder="How can we help?"
                  rows="3"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <div className="max-w-[280px] p-3 border border-gray-200 rounded-lg bg-gray-50/50 flex items-center justify-between shadow-sm">

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 bg-white rounded cursor-pointer hover:border-primary transition-colors"></div>

                    <span className="text-[12px] text-gray-600 font-medium">
                      I'm not a robot
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[7px] text-gray-400 mt-0.5 font-bold uppercase tracking-tighter leading-none">
                      reCAPTCHA
                    </span>

                    <div className="flex gap-1 mt-0.5">
                      <span className="text-[6px] text-gray-400 hover:underline cursor-pointer">
                        Privacy
                      </span>

                      <span className="text-[6px] text-gray-400 hover:underline cursor-pointer">
                        Terms
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </form>
          </div>

          <div className="px-6 py-4 bg-light text-secondary border-t border-gray-100 flex justify-end items-center gap-4 shrink-0">

            <button
              type="button"
              data-close-appointment=""
              className="text-[10px] font-bold text-gray-400 hover:text-secondary uppercase tracking-widest"
            >
              Cancel
            </button>

            <button
              type="submit"
              form="appointmentForm"
              className="bg-primary hover:bg-secondary text-white font-bold py-2.5 px-8 rounded-lg shadow-md active:scale-95 transition-all uppercase text-[10px] tracking-widest"
            >
              Send Message
            </button>

          </div>
        </div>
      </div>
    </>
  );
}