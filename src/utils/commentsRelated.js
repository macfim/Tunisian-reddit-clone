const addShowReply = (comments) => {
  const newComments = comments;

  for (let i = 0; i < newComments.length; i++) {
    if (newComments[i].kind === "t1") {
      newComments[i] = {
        ...newComments[i],
        data: { ...newComments[i].data, showReplies: false },
      };

      if (newComments[i].data.replies.data?.children?.length > 0) {
        addShowReply(newComments[i].data.replies.data.children);
      }
    }
  }

  return newComments;
};

const toggleShowReplies = (id, comments) => {
  const newComments = comments;

  for (let i = 0; i < newComments.length; i++) {
    if (newComments[i].kind === "t1") {
      if (newComments[i].data.id === id) {
        newComments[i].data.showReplies = !newComments[i].data.showReplies;
        return true;
      }

      if (newComments[i].data.replies.data?.children?.length > 0) {
        toggleShowReplies(id, newComments[i].data.replies.data.children);
      }
    }
  }
};

const toggleCommentById = (id, posts) => {
  const newPosts = posts;

  for (let i = 0; i < newPosts.length; i++) {
    const newComments = newPosts[i].data.comments;

    toggleShowReplies(id, newComments);
  }

  return newPosts;
};

export { addShowReply, toggleCommentById };
