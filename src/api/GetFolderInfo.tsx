async function GetFolderInfo() {
  const BASE_URL = "https://bootcamp-api.codeit.kr/api/sample/folder";
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  return response.json();
}

export default GetFolderInfo;
