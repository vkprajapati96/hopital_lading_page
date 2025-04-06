import React, { useEffect, useState } from "react"
import "./Feedback.css"
import axios from "axios"
import FeedbackCard from "./FeedbackCard"

function Feedback() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // choose for specific index
  const specificindex = [0, 1, 2, 3, 6, 7]
  const specificCard = reviews.filter((_, index) =>
    specificindex.includes(index)
  )

  const API_URL = "https://admin.tomedes.com/api/v1/get-reviews?page=1"

  //  fetch  reviews funtion
  const fetchReviews = async () => {
    try {
      const response = await axios.get(API_URL)
      return response.data
    } catch (error) {
      console.log("Error", error)
      return []
    }
  }

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviews()
      if (!data || data.length === 0) {
        setError("faild to load reviews")
      } else {
        setReviews(data.data)
      }
      setLoading(false)
    }
    getReviews()
  }, [])

  if (loading) return <p>Loading reviews...</p>
  if (error) return <p>{error}</p>
  return (
    <div className="feedback-section">
      <div className="container feedback">
        <h2>What Our Customers Say</h2>

        {/* review cards */}

        <div className="feedback-cards">
          {/*  show single card */}
          {specificCard.map((review, i) => (
            <FeedbackCard key={i} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feedback
