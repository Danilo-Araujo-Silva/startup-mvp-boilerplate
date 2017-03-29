class Group < ApplicationRecord
  has_many :children, :class_name => Group.name, :foreign_key => "parent_id"
  belongs_to :parent, :class_name => Group.name, :foreign_key => "parent_id", optional: true

  #TODO Add breadcrumb methods.

  @@main_groups = {
    root: Group.find_by_title('root'),
    developer: Group.find_by_title('developer'),
    administrator: Group.find_by_title('administrator'),
    user: Group.find_by_title('user'),
    public: Group.find_by_title('public')
  }.deep_freeze

  def self.main_groups
    @@main_groups
  end

  def main_groups
    @@main_groups
  end

  def _sanitize
    super

    self.parent_id = self.parent.id if !self.parent.nil?
  end

  def _validate
    super
  end
end
