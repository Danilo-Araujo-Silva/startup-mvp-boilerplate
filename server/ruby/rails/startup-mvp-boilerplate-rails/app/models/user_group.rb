class UserGroup < ApplicationRecord
  belongs_to :user
  belongs_to :permission

  @@grant_types = ['', '<', '<=', '=', '>', '>=', '<=>']

  def _sanitize
    super

    self.grant = nil if !(@@grant_types.include? self.grant)
  end

  def _validate
    super

    validates :grant, presence: { message: 'must be defined.'}, allow_blank: true
  end
end
