var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Chair1", p_image: "images/chair1.jfif",p_desc:"Rotating chair with rayon clothing", p_price: 2000},
					{p_id: "2", p_name: "Chair2", p_image: "images/chair2.jfif",p_desc:"Chair made with teak wood and glass painted",p_rating:3, p_price: 2500},
					{p_id: "3", p_name: "Chair3", p_image: "images/chair3.jfif",p_desc:"Chair made with cushion and covered with cotton fabric",p_rating:4, p_price: 1500},
					{p_id: "4", p_name: "Table1", p_image: "images/table1.jfif",p_desc:"Table made with lumber", p_price: 3000},
					{p_id: "5", p_name: "Table2", p_image: "images/table2.jfif",p_desc:"Table made with RoseWood", p_price: 3500},
					{p_id: "6", p_name: "Table3", p_image: "images/table3.jfif", p_desc:"Table made with plyWood",p_price: 4000}
				]; 


 
				$scope.add_cart = function(product){ 
					if(product){ 
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price}); 
					}	
				}
 
 
				$scope.total = 0; 
 
				$scope.setTotals = function(cart){ 
					if(cart){ 
						$scope.total += cart.p_price; 
					}
				}
 
				$scope.remove_cart = function(cart){ 
					if(cart){ 
						$scope.carts.splice($scope.carts.indexOf(cart), 1); 
						$scope.total -= cart.p_price; 
					}
				}
	});