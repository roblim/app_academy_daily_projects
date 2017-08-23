# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatRentalRequest < ApplicationRecord
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: { in: %w(PENDING APPROVED DENIED),
                                  message: "is invalid" }

  belongs_to :cat,
    foreign_key: :cat_id,
    primary_key: :id,
    class_name: :Cat

  def overlapping_requests
    dates = {new_start: self.start_date, new_end: self.end_date}
    CatRentalRequest.where("(start_date < :new_start AND :new_start < end_date) OR
    (:new_start < start_date AND start_date < :new_end)", dates)
  end

  def overlapping_approved_requests
    overlaps = overlapping_requests
    overlaps.select { |overlap| overlap.status == "APPROVED" }
  end

  def does_not_overlap_approved_request
    overlapping_approved_requests
  end
end
