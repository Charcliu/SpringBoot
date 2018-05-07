package com.fluently.xiaomi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HelloSpring {
	@RequestMapping(value = "/helloSpring", method = RequestMethod.GET)
	public String index() {
		return "Hello Spring";
	}
}
