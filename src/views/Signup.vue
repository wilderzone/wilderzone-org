<script setup>
import SimpleButton from '@/components/SimpleButton.vue'
</script>

<template>
	<div class="signup">
		<div id="signup_box">
			<div class="inner">
				<img src="@/assets/Goobies_Text.png" draggable="false" alt="" width="200" style="display:block;margin:-5.5rem 0px -3rem -0.5rem;pointer-events:none;">
				<h1>Register</h1>
				<label for="username">Username:</label>
				<input type="text" name="username" placeholder="Username" required>
				<label for="email">Email:</label>
				<input type="text" id="email" name="email" placeholder="Email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required @input="contact_form_update">
				<label for="password">Password:</label>
				<input type="password" name="password" placeholder="Password" required>
				<label for="confirm_password">Confirm Password:</label>
				<input type="password" name="confirm_password" placeholder="Confirm Password" required>
				<label for="wallet_address">Wallet Address:</label>
				<input type="text" name="wallet_address" placeholder="Wallet Address" required>
				<label for="confirm_wallet_address">Confirm Wallet Address:</label>
				<input type="text" name="confirm_wallet_address" placeholder="Confirm Wallet Address" required>
				<SimpleButton to="/play" text="REISTER" color="#f44336" />
			</div>
			<div class="splash">
				<img src="@/assets/Goobie_Illustrations/Goobie_Login-L1.png" draggable="false" alt="">
				<img src="@/assets/Goobie_Illustrations/Goobie_Login-L2.png" draggable="false" alt="" class="a_login_eyes">
				<img src="@/assets/Goobie_Illustrations/Goobie_Login-L3.png" draggable="false" alt="" class="a_login_bounce">
				<img src="@/assets/Goobie_Illustrations/Goobie_Login-L4.png" draggable="false" alt="">
			</div>
		</div>
	</div>
</template>

<style scoped>
@import '@/assets/form.css';

.signup {
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	gap: 2.5rem;
	width: 100%;
	height: 100vh;
	padding: 0px 0px 0px clamp(5%, 15%, 200px);
	background: linear-gradient(90deg, #fffe 25%, transparent 25%),
				radial-gradient(#0005, #0007),
				url('@/assets/Goobies_Landing_Illustartion.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

#signup_box {
	position: relative;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	width: clamp(400px, 90%, 600px);
}
#signup_box > .inner {
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	min-height: 500px;
	padding: 0px 2rem 2rem;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 1px 5px #0003,
				0px 2px 2px #00000024,
				0px 3px 1px -2px #0000001f;
}
#signup_box > .inner > h1 {
	color: black;
}
#signup_box > .splash {
	position: absolute;
	right: -28%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: clamp(150px, 70%, 400px);
	filter: drop-shadow(0px 4px 7px #00000060)
			drop-shadow(0px 0px 100px #ffffff90);
	user-select: none;
	pointer-events: none;
}
#signup_box > .splash img {
	position: absolute;
	z-index: 1;
	display: block;
	width: 100%;
}
</style>
