from bson import ObjectId


class ObjectIDConverter:
    regex = '[0-9A-Fa-f]{24}'

    def to_python(self, value):
        
        if ObjectId.is_valid(value):
            return ObjectId(value)
        raise ValueError()

    def to_url(self, value):
        return value
