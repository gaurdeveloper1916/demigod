"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import '../../weddingpage/test.css'
const vendorCategories = [
  {
    title: "Makeup Artists",
    count: 91879,
    image:
      "Image/wedding-page/vendor/make.webp",
  },
  {
    title: "Photographers",
    count: 76357,
    image:
      "Image/wedding-page/vendor/photo.webp",
  },
  {
    title: "Planners",
    count: 20656,
    image:
      "Image/wedding-page/vendor/wed.webp",
  },
  {
    title: "Venues",
    count: 38699,
    image:
      "Image/wedding-page/vendor/ven.webp",
  },
  {
    title: "Decorators",
    count: 21864,
    image:
      "Image/wedding-page/vendor/deco.webp",
  },
  {
    title: "Mehendi Artists",
    count: 22805,
    image:
      "Image/wedding-page/vendor/mehe.webp",
  },
]




export default function VendorCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSelection = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="container-fluid  ">
      <div className="top-vendor p-5 mt-4">
        <h6 className="display-6 mb-4">Find top vendors for hassle-free wedding planning</h6>

        <div className="d-flex flex-wrap gap-3">
          {vendorCategories.map((category, index) => (
            <div
              key={index}
              className={`position-relative rounded border ${selectedCategory?.title === category.title ? "border-primary" : ""
                }`}
              style={{ overflow: "hidden", cursor: "pointer" }}
              onClick={() => handleSelection(category)}
            >
              {/* Image */}
              <img
                className="rounded vendor-images"
                src={category.image}
                alt={category.title}

              />
              {/* Input box at top-right if selected */}
              {selectedCategory?.title === category.title ? (
                <div className="position-absolute top-0 end-0 p-2">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="custom-checkbox"
                  />
                </div>
              ) : (
                <div className="position-absolute top-0 end-0 p-2">
                  <input
                    type="checkbox"
                    checked={false}
                    readOnly
                    className="custom-checkbox"
                  />
                </div>
              )}

              {/* Overlay */}
              <div
                className="card-img-overlay text-white d-flex flex-column justify-content-end p-3"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
                }}
              >
                <h5 className="card-title mb-1">{category.title}</h5>
                <p className="card-text">{category.count.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center">
            <p className="mb-0 fs-5">
              Send your enquiry to know about the vendors. Our executive will call you shortly.
            </p>
            <button className="btn btn-danger d-flex align-items-center gap-2">
              Enquire now
              <ArrowRight className="ms-1" />
            </button>
          </div>
        </div>
      </div>



    </div>
  )
}
