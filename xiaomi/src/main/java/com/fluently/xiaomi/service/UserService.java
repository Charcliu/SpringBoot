package com.fluently.xiaomi.service;

import java.util.List;

import com.fluently.xiaomi.model.User;

public interface UserService {
	public List<User> getUserInfo();

	public void insert(User user);

	public void delUser(int id);
}
