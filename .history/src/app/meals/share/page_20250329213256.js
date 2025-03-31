import ImagePicker from "../image-picker";

export default function ShareMealPage() {

  fuction 
    return (
      <>
        <header className="bg-gray-100 py-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Share your <span className="text-red-500">favourite meals</span>
          </h1>
          <p className="text-gray-600 mt-2">Or any other dish you love sharing!</p>
        </header>
  
        <main className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
          <form className="space-y-4" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                />
              </div>
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                />
              </div>
            </div>
  
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium">
                Meal Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
  
            {/* Summary */}
            <div>
              <label htmlFor="summary" className="block text-gray-700 font-medium">
                Summary
              </label>
              <input
                type="text"
                id="summary"
                name="summary"
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
  
            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-gray-700 font-medium">
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows="5"
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              ></textarea>
            </div>
  
            {/* Image Picker */}
            <div>
              <label htmlFor="image" className="block text-gray-700 font-medium">
                Upload Meal Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
                <ImagePicker />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Share Meal
              </button>
            </div>
          </form>
        </main>
      </>
    );
  }
  