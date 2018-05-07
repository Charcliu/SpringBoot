package com.fluently.xiaomi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.fluently.xiaomi.model.User;

@Mapper
public interface UserDao {
	public List<User> findUserInfo();

	public int addUserInfo(User user);

	public int delUserInfo(int id);
}
