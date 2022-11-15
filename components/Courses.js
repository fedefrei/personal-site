import { data } from "../coursesData";
import { format } from "date-fns";
import { useState } from "react";
import Fuse from "fuse.js";

const fuseOptions = {
	includeScore: true,
	// Search in `author` and in `tags` array
	keys: ["title", "keywords", "description"],
	threshold: 0.1,
};

const fuse = new Fuse(
	data.filter((course) => course.dateCompleted),
	fuseOptions
);

function SearchResults(keyword) {
	if (keyword) {
		return fuse.search(keyword).map((result) => result.item);
	}

	return data.filter((course) => course.dateCompleted);
}

const CoursesTaken = ({ courses, show }) => {
	if (courses.length === 0) return null;

	return courses
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
};

const ShowMoreButton = ({ coursesCount, coursesToShow, setCoursesToShow }) => {
	if (coursesCount <= coursesToShow) return null;

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
	const [searchKeyword, setKeyword] = useState("");
	const courses = SearchResults(searchKeyword);

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
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-md-6 mb-4">
							<input
								className="form-control"
								placeholder="Enter a keyword, year, technology..."
								value={searchKeyword}
								onChange={(event) => {
									setKeyword(event.target.value);
									setCoursesToShow(12);
								}}
							></input>
						</div>
					</div>
				</div>
				<div className="row">
					<CoursesTaken show={coursesToShow} courses={courses} />
				</div>
				<ShowMoreButton coursesCount={courses.length} coursesToShow={coursesToShow} setCoursesToShow={setCoursesToShow} />
			</div>
		</section>
	);
};

export default Courses;
