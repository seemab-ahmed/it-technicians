import { useState, useRef } from 'react'

export default function ContactForm() {
  const [fileName, setFileName] = useState('')
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileChange = (file) => {
    if (file) setFileName(file.name)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    if (e.dataTransfer.files.length > 0) {
      fileInputRef.current.files = e.dataTransfer.files
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  return (
    <section id="contact" className="bg-[#F7FAFC] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#00288D] mb-4 !leading-[1.3]">
          Request Project Support
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Tell us about your property, scope and timeline. We will review your request and confirm
          next steps within one business day.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-10">
        <form
          action="https://formsubmit.co/mirco@it-technicians.com"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Project Inquiry – IT Technicians" />
          <input type="hidden" name="_autoresponse" value="Thank you for reaching out to IT Technicians. We have received your project inquiry and will review your request within one business day. We will follow up with next steps shortly." />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00288D]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                placeholder="e.g. you@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00288D]"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="e.g. Hilton Group / Hotel Management Co."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00288D]"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">
              Property Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. San Diego, CA"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00288D]"
            />
          </div>

          <div>
            <label htmlFor="scope" className="block text-sm font-medium mb-2">
              Scope Description
            </label>
            <textarea
              id="scope"
              name="scope"
              rows="4"
              placeholder="Describe testing or cabling requirements..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00288D]"
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium mb-2">
              Project Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              placeholder="e.g. Q3 2026 or Immediate"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00288D]"
            />
          </div>

          <div>
            <label htmlFor="fileUpload" className="block text-sm font-medium mb-2">
              Document Upload
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
                dragging ? 'border-blue-500' : 'border-gray-300 hover:border-[#00288D]'
              }`}
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="fileUpload"
                name="attachment"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
              <p className="cursor-pointer text-sm flex justify-center items-center text-center gap-1">
                <img src="/Images/uploadIcon.png" alt="" />
                {fileName ? `File Attached: ${fileName} ✅` : 'Click to upload or drag and drop'}
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#00288D] text-white px-10 py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#001f6e] hover:scale-105 hover:shadow-lg m-auto flex justify-center items-center text-center gap-3"
            >
              Submit Project Inquiry
              <img src="/Images/rightArrow2.png" alt="" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
