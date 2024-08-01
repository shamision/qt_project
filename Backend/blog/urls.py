from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.blog_list, name='blog-list'),
    path('post/',views.blog_post, name="post"),
    path('blogs/<int:pk>/', views.blog_detail, name='blog-detail'),
    path('retrieve_blog/<int:pk>/',views.retrieve_blog, name='retrieve-blog'),
    path('blogs/<int:blog_id>/comments/', views.comment_list, name='comment-list'),
    path('blogs/<int:blog_id>/comment/', views.comment_create, name='comment-create'),
    path('comment/<int:pk>/', views.comment_detail, name='comment-detail'),
    path('retrieve_comment/<int:pk>/', views.retrieve_comment, name='retrieve-comment'),
]