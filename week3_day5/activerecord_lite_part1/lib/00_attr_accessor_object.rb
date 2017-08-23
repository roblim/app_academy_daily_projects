class AttrAccessorObject
  def self.my_attr_accessor(*names)
    attr_names = names

    attr_names.each do |name|
      define_method(name) { instance_variable_get("@#{name}".to_sym) }
      define_method("#{name}=".to_sym) do |obj|
        instance_variable_set("@#{name.to_s}".to_sym, obj)
      end
    end
  end
end
