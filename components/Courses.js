import { data } from "../coursesData";
import { format } from "date-fns";
import { useState } from "react";
import Fuse from "fuse.js";
import SectionTitle from "./SectionTitle";

const PAGE_SIZE = 6;

const fuseOptions = {
	includeScore: true,
	// Search in `author` and in `tags` array
	keys: ["title", "keywords", "description"],
	threshold: 0.1,
};

const completedCourses = data.filter((course) => course.dateCompleted);

const fuse = new Fuse(completedCourses, fuseOptions);

function SearchResults(keyword) {
	if (keyword) {
		return fuse.search(keyword).map((result) => result.item);
	}

	return completedCourses;
}

const CoursesTaken = ({ courses, show }) => {
	if (courses.length === 0) return <p className="empty-state">No courses match that search.</p>;

	return (
		<div className="row g-3">
			{[...courses]
				.sort((course1, course2) => (course1.dateCompleted < course2.dateCompleted ? 1 : -1))
				.slice(0, show)
				.map((course) => (
					<div className="col-md-6 col-lg-4" key={course.id}>
						<div className="card-surface hoverable course-card">
							<h3>{course.title}</h3>
							<div className="course-meta">
								{course.author} · {format(new Date(course.dateCompleted), "MMM yyyy")}
							</div>
							<p className="course-desc">{course.description}</p>
							{course.path && <span className="chip">{course.path}</span>}
						</div>
					</div>
				))}
		</div>
	);
};

const ShowMoreButton = ({ coursesCount, coursesToShow, setCoursesToShow }) => {
	if (coursesCount <= coursesToShow) return null;

	return (
		<div className="text-center mt-4">
			<button className="btn-ghost" onClick={() => setCoursesToShow(coursesToShow + PAGE_SIZE)}>
				Show more ({coursesCount - coursesToShow} left)
			</button>
		</div>
	);
};

const Courses = () => {
	const [coursesToShow, setCoursesToShow] = useState(PAGE_SIZE);
	const [searchKeyword, setKeyword] = useState("");
	const courses = SearchResults(searchKeyword);

	return (
		<section id="courses" className="section">
			<div className="container">
				<SectionTitle number="05" title="Continuous learning" subtitle={`${completedCourses.length} courses completed and counting.`} />
				<div className="search-box">
					<i className="bi bi-search"></i>
					<input
						aria-label="Search courses"
						placeholder="Search by keyword, year, technology..."
						value={searchKeyword}
						onChange={(event) => {
							setKeyword(event.target.value);
							setCoursesToShow(PAGE_SIZE);
						}}
					/>
				</div>
				<CoursesTaken show={coursesToShow} courses={courses} />
				<ShowMoreButton coursesCount={courses.length} coursesToShow={coursesToShow} setCoursesToShow={setCoursesToShow} />
			</div>
		</section>
	);
};

export default Courses;
