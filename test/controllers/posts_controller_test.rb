require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get main" do
    get posts_main_url
    assert_response :success
  end

  test "should get create" do
    get posts_create_url
    assert_response :success
  end

  test "should get page" do
    get posts_page_url
    assert_response :success
  end

end
