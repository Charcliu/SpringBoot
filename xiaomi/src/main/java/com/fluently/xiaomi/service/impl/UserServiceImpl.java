package com.fluently.xiaomi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fluently.xiaomi.dao.UserDao;
import com.fluently.xiaomi.model.User;
import com.fluently.xiaomi.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public List<User> getUserInfo() {
		return userDao.findUserInfo();
	}

	@Override
	public void insert(User user) {
		userDao.addUserInfo(user);

	}

	@Override
	public void delUser(int id) {
		userDao.delUserInfo(id);
	}
}
