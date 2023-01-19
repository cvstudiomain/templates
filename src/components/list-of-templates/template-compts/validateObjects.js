export const display = (item) => {
  let show = false;
  let obj = { ...item };
  delete obj.id;
  delete obj._id;
  delete obj.job_title;
  delete obj.firstname;
  delete obj.lastname;
  delete obj.profile_image;
  Object.entries(obj).forEach((field) => {
    if (field[1] !== null && field[1] !== "") show = true;

    return show;
  });

  return show;
};
