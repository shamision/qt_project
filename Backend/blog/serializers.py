from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Blog, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name','last_name', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}


class BlogSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'author', 'created_at', 'updated_at']

    def create(self, validated_data):

        request = self.context.get("request")
        if request and hasattr(request,"user"):
            instance = Blog.objects.create(author=request.user,**validated_data)
            return instance
        else:
            raise serializers.ValidationError("The user must be logged in")
        

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'blog', 'content', 'author', 'created_at', 'updated_at']