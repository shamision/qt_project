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

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'blog', 'content', 'author', 'created_at', 'updated_at']