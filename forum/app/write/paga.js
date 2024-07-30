export default function Write() {
    return (
        <div>
            <h4>글 작성</h4>
            <from action="/api/test" method="POST">
                <button type="sumbit">제출</button>
            </from>
        </div>
    );
}