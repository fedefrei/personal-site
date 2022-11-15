import { data } from "../coursesData";
import { format } from "date-fns";
import { useState } from "react";

const CoursesTaken = ({ show }) =>
	data
		.filter((course) => course.dateCompleted)
		.sort((course1, course2) => (course1.dateCompleted < course2.dateCompleted ? 1 : -1))
		.slice(0, show)
		.map((course) => (
			<div className="col-md-4" key={course.id}>
				<div className="work-box">
					<div className="work-content">
						<div className="row">
							<h4>{course.title}</h4>
							<div className="w-more">
								<span className="w-ctegory">Author: {course.author}</span>{" "}
								<span className="w-date">Date Completed: {format(new Date(course.dateCompleted), "MM/yyyy")}</span>
							</div>
						</div>
						<div className="row py-2">
							<div className="w-more">{course.description}</div>
						</div>
						<div className="row px-4">
							{course.path && (
								<button type="button" className="btn btn-outline-dark">
									{course.path}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		));

const ShowMoreButton = ({ coursesToShow, setCoursesToShow }) => {
	if (data.length <= coursesToShow) return null;

	return (
		<div className="row">
			<div className="text-center">
				<button className="btn btn-dark w-50" onClick={() => setCoursesToShow(coursesToShow + 9)}>
					Show me more
				</button>
			</div>
		</div>
	);
};

const Courses = () => {
	const [coursesToShow, setCoursesToShow] = useState(12);

	return (
		<section id="courses" className="portfolio-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-box text-center">
							<h3 className="title-a">Courses taken</h3>
							<p className="subtitle-a">I'm always learning something.</p>
							<div className="line-mf"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<CoursesTaken show={coursesToShow} />
				</div>
				<ShowMoreButton coursesToShow={coursesToShow} setCoursesToShow={setCoursesToShow} />
			</div>
		</section>
	);
};

export default Courses;
