var mongoose=require('./connect');
var Schema=mongoose.Schema;
var userSchema=new Schema({
	_id:String,
	userName:String,
	email:{
		type:String,
		default:null
	},
	followers:[{
		id:{
			type:String,
			default:null
		}
	}],
	following:[{
		id:{
			type:String,
			default:null
		}
	}],
	friendsByFb:[{
		name:{
			type:String,
			default:null
		},
		id:{
			type:String,
			default:null
		}
	}],
	taggedPlaces:[{
		latitude:{
			type:String,
			default:null
		},
		longitude:{
			type:String,
			default:null
		},
		city:{
			type:String,
			default:null
		}
	}],
	posts:[{
		id:{
			type:String,
			default:null
		}
	}],
	wishlist:[{
		id:{
			type:String,
			default:null
		}
	}]
});
var User = mongoose.model('User', userSchema);
module.exports=User;
