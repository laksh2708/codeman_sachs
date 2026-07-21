class ProjectRetriever:

    @staticmethod
    def retrieve(index, query):

        query_engine = index.as_query_engine()

        response = query_engine.query(query)

        return str(response)