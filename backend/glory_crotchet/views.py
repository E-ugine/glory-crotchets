from django.shortcuts import render
from.models import Product, Order, OrderItem, Customer,Review,Delivery
from rest_framework import viewsets
from.serializers import ProductSerializer, OrderSerializer, OrderItemSerializer, CustomerSerializer, ReviewSerializer, DeliverySerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView







