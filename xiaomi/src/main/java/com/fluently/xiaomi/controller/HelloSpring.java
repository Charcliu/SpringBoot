package com.fluently.xiaomi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fluently.xiaomi.model.User;
import com.fluently.xiaomi.service.UserService;

@RestController
@RequestMapping("/home")
public class HelloSpring {
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/helloSpring", method = RequestMethod.GET)
	public String index() {
		return "Hello Spring";
	}

	@RequestMapping(value = "/getUserInfo", method = RequestMethod.POST)
	public List<User> getUserInfo() {
		List<User> user = userService.getUserInfo();
		System.out.println(user.toString());
		return user;
	}

	@RequestMapping(value = "/addUserInfo", method = RequestMethod.POST)
	public String addUserInfo(@RequestParam("id") int id, @RequestParam("name") String name) {
		User user = new User();
		user.setId(id);
		user.setName(name);
		userService.insert(user);
		return "success:" + user.toString();
	}

	@RequestMapping(value = "/delUserInfoById", method = RequestMethod.POST)
	public void addUserInfo(@RequestParam("id") int id) {
		userService.delUser(id);
	}
}
